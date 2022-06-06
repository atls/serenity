import React                from 'react'
import { FC }               from 'react'
import { useState }         from 'react'
import { useAnimation }     from 'framer-motion'

import { Condition }        from '@ui/condition'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { Divider }          from '@ui/divider'
import { Text }             from '@ui/text'

import { MinusIcon }        from '@ui/icons'
import { PlusIcon }         from '@ui/icons'
import { AccordionProps }   from './accordion.interface'
import { TriggerContainer } from './trigger-container'
import { ContentContainer } from './content-container'

const Accordion: FC<AccordionProps> = ({ title, children }) => {
  const [active, setActive] = useState<boolean>(false)
  const controls = useAnimation()

  if (active) {
    controls.start({ height: 'min-content' })
  }

  if (!active) {
    controls.start({ height: 0, overflow: 'hidden' })
  }

  return (
    <Column width='100%'>
      <TriggerContainer onClick={() => setActive(!active)}>
        <Row alignItems='center' height={56}>
          <Layout flexBasis={24} />
          <Layout>
            <Text fontSize='regular' fontWeight='medium' color={active ? 'black' : 'stormdust'} lineHeight='medium'>
              {title}
            </Text>
          </Layout>
          <Layout flexGrow={1} />
          <Layout width={24}>
            <Condition match={!active}>
              <PlusIcon />
            </Condition>
            <Condition match={active}>
              <MinusIcon />
            </Condition>
          </Layout>
          <Layout flexBasis={24} />
        </Row>
      </TriggerContainer>
      <Layout>
        <ContentContainer animate={controls} transition={{duration: 0.2}}>
          {children}
        </ContentContainer>
      </Layout>
      <Divider />
    </Column>
  )
}

export { Accordion }
