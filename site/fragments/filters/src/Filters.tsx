import React         from 'react'
import { useRouter } from 'next/router'

import { Accordion } from '@ui/accordion'
import { Condition } from '@ui/condition'
import { CheckIcon } from '@ui/icons'
import { Box }       from '@ui/layout'
import { Column }    from '@ui/layout'
import { Layout }    from '@ui/layout'
import { Row }       from '@ui/layout'
import { Text }      from '@ui/text'

export const Filters = ({
  data = [],
  check,
  title,
  activeCategory,
  selectCategory,
  activeKey,
  onChange,
}) => {
  const router = useRouter()

  return (
    <Column>
      <Layout flexBasis={48} alignItems='center'>
        <Text fontWeight='medium' fontSize='extra' color='black' lineHeight='extra'>
          {title}
        </Text>
      </Layout>
      <Layout flexBasis={20} />
      <Box border='black' borderRadius='extra' boxSizing='border-box'>
        <Column>
          {data.map((item: any) => (
            <Accordion activeKey={activeKey} title={item.name} onChange={onChange}>
              <Column>
                {(item as any).children.map((category: any) => (
                  <Box key={category.id}>
                    <Layout flexBasis={24} flexShrink={0} />
                    <Column>
                      <Row>
                        <Condition match={router.route === '/projects'}>
                          <Layout>
                            {check && (
                              <CheckIcon
                                width={16}
                                height={16}
                                color={
                                  activeCategory === category.id ? 'black' : 'rgb(153, 153, 153)'
                                }
                              />
                            )}
                          </Layout>
                          <Layout flexBasis={16} />
                        </Condition>
                        <Text
                          fontSize='normal'
                          color='stormdust'
                          lineHeight='default'
                          onClick={() => selectCategory(category.id)}
                          cursor='pointer'
                        >
                          {category.name}
                        </Text>
                      </Row>
                      <Layout flexBasis={12} flexShrink={0} />
                    </Column>
                  </Box>
                ))}
              </Column>
            </Accordion>
          ))}
        </Column>
      </Box>
    </Column>
  )
}
