import Document        from 'next/document'
import compose         from 'recompose/compose'
import { withEmotion } from '@atlantis-lab/next-document-with-emotion'
import { withHelmet }  from '@atlantis-lab/next-document-with-helmet'

const withProviders = compose(withEmotion(), withHelmet())

export default withProviders(Document)
