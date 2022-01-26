import React                   from 'react'

import { CheckButton }         from '@ui/button'
import { Divider }             from '@ui/divider'
import { Box, Column, Layout } from '@ui/layout'
import { Text }                from '@ui/text'

import messages                from './messages'

export const WeldingWorksheet = ({
  intl,
  needToWeld = {},
  whereToWeld = {},
  task = {},
  projectStage = {},
  requireAdditionally = {},
  onChangeNeedToWeld,
  onChangeWhereToWeld,
  onChangeTask,
  onChangeProjectStage,
  onChangeRequireAdditionally,
}: any) => (
  <Column>
    <Column px={30} boxSizing='border-box'>
      <Layout flexBasis={20} />
      <Layout>
        <Text fontWeight='medium' lineHeight='medium'>
          {intl.formatMessage(messages.needToWeld)}
        </Text>
      </Layout>
      <Layout flexBasis={16} />
      <Layout>
        <Box flexDirection={['column', 'row']} width='100%'>
          <Layout flexGrow={1} flexBasis={['100%', '100%', '50%']}>
            <CheckButton
              active={needToWeld.metalConstructions}
              name='metalConstructions'
              text={intl.formatMessage(messages.metalConstructions)}
              onClick={onChangeNeedToWeld}
            />
          </Layout>
          <Layout flexBasis={22} flexShrink={0} />
          <Layout flexGrow={1} flexBasis={['100%', '100%', '50%']}>
            <CheckButton
              active={needToWeld.gatesHingesDoors}
              name='gatesHingesDoors'
              text={intl.formatMessage(messages.gatesHingesDoors)}
              onClick={onChangeNeedToWeld}
            />
          </Layout>
        </Box>
      </Layout>
      <Layout flexBasis={22} />
      <Layout>
        <Box flexDirection={['column', 'row']} width='100%'>
          <Layout flexGrow={1} flexBasis={['100%', '100%', '50%']}>
            <CheckButton
              active={needToWeld.frameworksCanopies}
              name='frameworksCanopies'
              text={intl.formatMessage(messages.frameworksCanopies)}
              onClick={onChangeNeedToWeld}
            />
          </Layout>
          <Layout flexBasis={22} flexShrink={0} />
          <Layout flexGrow={1} flexBasis={['100%', '100%', '50%']}>
            <CheckButton
              active={needToWeld.fences}
              name='fences'
              text={intl.formatMessage(messages.fences)}
              onClick={onChangeNeedToWeld}
            />
          </Layout>
        </Box>
      </Layout>
      <Layout flexBasis={22} />
      <Layout>
        <Box flexDirection={['column', 'row']} width='100%'>
          <Layout flexGrow={1} flexBasis={['100%', '100%', '50%']}>
            <CheckButton
              active={needToWeld.heatingAndWaterPipes}
              name='heatingAndWaterPipes'
              text={intl.formatMessage(messages.heatingAndWaterPipes)}
              onClick={onChangeNeedToWeld}
            />
          </Layout>
          <Layout flexBasis={[0, 0, 22]} />
          <Layout flexGrow={[0, 0, 1]} flexBasis={[0, 0, '50%']} />
        </Box>
      </Layout>
    </Column>
    <Layout flexBasis={30} />
    <Divider />
    <Layout flexBasis={22} />
    <Column px={30} boxSizing='border-box'>
      <Layout>
        <Text fontWeight='medium' lineHeight='medium'>
          {intl.formatMessage(messages.whereToWeld)}
        </Text>
      </Layout>
      <Layout flexBasis={16} />
      <Layout>
        <Box flexDirection={['column', 'row']} width='100%'>
          <Layout flexGrow={1} flexBasis={['100%', '100%', '50%']}>
            <CheckButton
              active={whereToWeld.inside}
              name='inside'
              text={intl.formatMessage(messages.inside)}
              onClick={onChangeWhereToWeld}
            />
          </Layout>
          <Layout flexBasis={22} flexShrink={0} />
          <Layout flexGrow={1} flexBasis={['100%', '100%', '50%']}>
            <CheckButton
              active={whereToWeld.outside}
              name='outside'
              text={intl.formatMessage(messages.outside)}
              onClick={onChangeWhereToWeld}
            />
          </Layout>
        </Box>
      </Layout>
    </Column>
    <Layout flexBasis={30} />
    <Divider />
    <Layout flexBasis={22} />
    <Column px={30} boxSizing='border-box'>
      <Layout>
        <Text fontWeight='medium' lineHeight='medium'>
          {intl.formatMessage(messages.task)}
        </Text>
      </Layout>
      <Layout flexBasis={16} />
      <Layout>
        <Box flexDirection={['column', 'row']} width='100%'>
          <Layout flexGrow={1} flexBasis={['100%', '100%', '50%']}>
            <CheckButton
              active={task.craft}
              name='craft'
              text={intl.formatMessage(messages.craft)}
              onClick={onChangeTask}
            />
          </Layout>
          <Layout flexBasis={22} flexShrink={0} />
          <Layout flexGrow={1} flexBasis={['100%', '100%', '50%']}>
            <CheckButton
              active={task.repair}
              name='repair'
              text={intl.formatMessage(messages.repair)}
              onClick={onChangeTask}
            />
          </Layout>
        </Box>
      </Layout>
      <Layout flexBasis={22} />
      <Layout>
        <Box flexDirection={['column', 'row']} width='100%'>
          <Layout flexGrow={1} flexBasis={['100%', '100%', '50%']}>
            <CheckButton
              active={task.upgrade}
              name='upgrade'
              text={intl.formatMessage(messages.upgrade)}
              onClick={onChangeTask}
            />
          </Layout>
          <Layout flexBasis={[0, 0, 22]} />
          <Layout flexGrow={[0, 0, 1]} flexBasis={[0, 0, '50%']} />
        </Box>
      </Layout>
    </Column>
    <Layout flexBasis={30} />
    <Divider />
    <Layout flexBasis={22} />
    <Column px={30} boxSizing='border-box'>
      <Layout>
        <Text fontWeight='medium' lineHeight='medium'>
          {intl.formatMessage(messages.projectStage)}
        </Text>
      </Layout>
      <Layout flexBasis={16} />
      <Layout>
        <Box flexDirection={['column', 'row']} width='100%'>
          <Layout flexGrow={1} flexBasis={['100%', '100%', '50%']}>
            <CheckButton
              active={projectStage.planning}
              name='planning'
              text={intl.formatMessage(messages.planning)}
              onClick={onChangeProjectStage}
            />
          </Layout>
          <Layout flexBasis={22} flexShrink={0} />
          <Layout flexGrow={1} flexBasis={['100%', '100%', '50%']}>
            <CheckButton
              active={projectStage.budgeting}
              name='budgeting'
              text={intl.formatMessage(messages.budgeting)}
              onClick={onChangeProjectStage}
            />
          </Layout>
        </Box>
      </Layout>
      <Layout flexBasis={22} />
      <Layout>
        <Box flexDirection={['column', 'row']} width='100%'>
          <Layout flexGrow={1} flexBasis={['100%', '100%', '50%']}>
            <CheckButton
              active={projectStage.executorSearching}
              name='executorSearching'
              text={intl.formatMessage(messages.executorSearching)}
              onClick={onChangeProjectStage}
            />
          </Layout>
          <Layout flexBasis={[0, 0, 22]} />
          <Layout flexGrow={[0, 0, 1]} flexBasis={[0, 0, '50%']} />
        </Box>
      </Layout>
    </Column>
    <Layout flexBasis={30} />
    <Divider />
    <Layout flexBasis={22} />
    <Column px={30} boxSizing='border-box'>
      <Layout>
        <Text fontWeight='medium' lineHeight='medium'>
          {intl.formatMessage(messages.requireAdditionally)}
        </Text>
      </Layout>
      <Layout flexBasis={16} />
      <Layout>
        <Box flexDirection={['column', 'row']} width='100%'>
          <Layout flexGrow={1} flexBasis={['100%', '100%', '50%']}>
            <CheckButton
              active={requireAdditionally.purchaseMaterials}
              name='purchaseMaterials'
              text={intl.formatMessage(messages.purchaseMaterials)}
              onClick={onChangeRequireAdditionally}
            />
          </Layout>
          <Layout flexBasis={22} flexShrink={0} />
          <Layout flexGrow={1} flexBasis={['100%', '100%', '50%']}>
            <CheckButton
              active={requireAdditionally.unloadingAndLifting}
              name='unloadingAndLifting'
              text={intl.formatMessage(messages.unloadingAndLifting)}
              onClick={onChangeRequireAdditionally}
            />
          </Layout>
        </Box>
      </Layout>
      <Layout flexBasis={22} />
      <Layout>
        <Box flexDirection={['column', 'row']} width='100%'>
          <Layout flexGrow={1} flexBasis={['100%', '100%', '50%']}>
            <CheckButton
              active={requireAdditionally.dismantling}
              name='dismantling'
              text={intl.formatMessage(messages.dismantling)}
              onClick={onChangeRequireAdditionally}
            />
          </Layout>
          <Layout flexBasis={22} flexShrink={0} />
          <Layout flexGrow={1} flexBasis={['100%', '100%', '50%']}>
            <CheckButton
              active={requireAdditionally.garbageRemoval}
              name='garbageRemoval'
              text={intl.formatMessage(messages.garbageRemoval)}
              onClick={onChangeRequireAdditionally}
            />
          </Layout>
        </Box>
      </Layout>
      <Layout flexBasis={22} />
      <Layout>
        <Box flexDirection={['column', 'row']} width='100%'>
          <Layout flexGrow={1} flexBasis={['100%', '100%', '50%']}>
            <CheckButton
              active={requireAdditionally.cleaning}
              name='cleaning'
              text={intl.formatMessage(messages.cleaning)}
              onClick={onChangeRequireAdditionally}
            />
          </Layout>
          <Layout flexBasis={[0, 0, 22]} />
          <Layout flexGrow={[0, 0, 1]} flexBasis={[0, 0, '50%']} />
        </Box>
      </Layout>
    </Column>
    <Layout flexBasis={30} />
    <Divider />
  </Column>
)
