import * as prettierPlugin from '@atls/prettier-plugin'
import prettierConfigModule from '@atls/config-prettier'
import svgrModule          from '@svgr/core'
import prettierStandalone  from 'prettier/standalone.js'
import camelcase           from 'camelcase'
import fs                  from 'fs-extra-promise'
import glob                from 'glob-promise'
import path                from 'path'
import parserBabel         from 'prettier/parser-babel.js'
import parserTypescript    from 'prettier/parser-typescript.js'

import { replacements }    from './replacements.ts'

const TARGET_DIR = path.join(import.meta.dirname, 'src')
const prettierConfig = prettierConfigModule.default
const { format } = prettierStandalone
const svgr = svgrModule.default

const svgrTemplate = ({ template }, opts, { componentName, jsx }) => {
  const typeScriptTpl = template.smart({ plugins: ['typescript', 'prettier'] })

  return typeScriptTpl.ast`
  /* eslint-disable */
  
 import React from 'react'
 import { useTheme } from '@emotion/react'
 import { IconProps } from '../icons.interfaces.js'
    export const ${componentName} = (props: IconProps) => {
    const theme: any = useTheme()
    
    return ${jsx}
}
  `
}

const read = (files) =>
  Promise.all(
    files.map(async (iconPath) => ({
      name: `${camelcase(path.basename(iconPath, path.extname(iconPath)), {
        pascalCase: true,
      }).replace('50+', 'FiftyPlus')}Icon`,
      source: (await fs.readFileAsync(iconPath)).toString(),
    }))
  )

const compile = (icons) =>
  Promise.all(
    icons.map(async (icon) => ({
      name: icon.name,
      code: await svgr(
        icon.source.replace(/mask0/g, icon.name),
        {
          icon: true,
          template: svgrTemplate,
          replaceAttrValues: replacements[icon.name] || {},
        },
        { componentName: icon.name.replace('50+', 'FiftyPlus') }
      ),
    }))
  )

const save = async (sources) =>
  Promise.all(
    sources.map((source) =>
      fs.writeFileAsync(
        path.join(TARGET_DIR, `${source.name}.tsx`),
        // @ts-ignore
        format(`/* eslint-disable */\n${source.code}`, {
          ...prettierConfig,
          filepath: path.join(TARGET_DIR, `${source.name}.tsx`),
          plugins: [parserTypescript, parserBabel, prettierPlugin],
        })
      ))
  )

const createIndex = (sources) =>
  fs.writeFileAsync(
    path.join(TARGET_DIR, 'index.ts'),
    `${sources.map((source) => `export * from './${source.name}.js'`).join('\n')}\n`
  )

const build = async () => {
  const files = await glob('./icons/*.svg')
  const icons = await read(files)

  const sources = await compile(icons.filter((icon: any) => icon.source))

  await fs.ensureDir(TARGET_DIR)

  await save(sources)
  await createIndex(sources)
}

build()
