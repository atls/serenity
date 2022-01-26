import React           from 'react'
import { Mjml }        from 'mjml-react/dist/src/mjml'
import { MjmlBody }    from 'mjml-react/dist/src/mjml-body'
import { MjmlButton }  from 'mjml-react/dist/src/mjml-button'
import { MjmlColumn }  from 'mjml-react/dist/src/mjml-column'
import { MjmlHead }    from 'mjml-react/dist/src/mjml-head'
import { MjmlSection } from 'mjml-react/dist/src/mjml-section'
import { MjmlText }    from 'mjml-react/dist/src/mjml-text'
import { MjmlTitle }   from 'mjml-react/dist/src/mjml-title'

import messages        from './messages'

export const Template = ({ intl, link, webVersionUrl }: any) => (
  <Mjml>
    <MjmlHead>
      <MjmlTitle>{intl.formatMessage(messages.subject)}</MjmlTitle>
    </MjmlHead>
    <MjmlBody>
      <MjmlSection fullWidth backgroundColor='#efefef'>
        <MjmlColumn>
          <MjmlText align='center' fontSize='14px' color='#626262'>
            {intl.formatMessage(messages.welcome, {
              site: 'Yandex. Service',
            })}
          </MjmlText>
        </MjmlColumn>
      </MjmlSection>
      <MjmlSection fullWidth backgroundColor='#efefef'>
        <MjmlColumn width={400}>
          <MjmlText align='center' fontSize='14px' color='#626262'>
            {intl.formatMessage(messages.activateDescription)}
          </MjmlText>
        </MjmlColumn>
      </MjmlSection>
      <MjmlSection fullWidth backgroundColor='#efefef'>
        <MjmlColumn>
          <MjmlButton align='center' href={link}>
            {intl.formatMessage(messages.activate)}
          </MjmlButton>
        </MjmlColumn>
      </MjmlSection>
      <MjmlSection fullWidth backgroundColor='#efefef'>
        <MjmlColumn>
          <MjmlText align='center' fontSize='14px' color='#626262'>
            {intl.formatMessage(messages.ignore)}
          </MjmlText>
        </MjmlColumn>
      </MjmlSection>
      {webVersionUrl && (
        <MjmlSection fullWidth>
          <MjmlColumn>
            <MjmlButton
              align='right'
              fontSize='14px'
              color='#626262'
              backgroundColor='transparent'
              href={webVersionUrl}
            >
              {intl.formatMessage(messages.webVersion)}
            </MjmlButton>
          </MjmlColumn>
        </MjmlSection>
      )}
    </MjmlBody>
  </Mjml>
)
