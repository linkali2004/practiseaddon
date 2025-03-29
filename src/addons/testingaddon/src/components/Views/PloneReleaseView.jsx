import RichTextViewWidget from '@plone/volto/components/theme/Widgets/RichTextWidget';
import { Container } from 'semantic-ui-react';
import RenderBlocks from '@plone/volto/components/theme/View/RenderBlocks';
const PloneReleaseView = (props)=>{
    const { content } = props;
    return(
        <Container>
        <h1 className="documentFirstHeading">Plone {content.version}</h1>
        <p>Version: {content.version}</p>
        <p>Release Date: {content.release_date}</p>
        <h2>Changelog</h2>
        <RichTextViewWidget value={content.changelog} />
        <RenderBlocks {...props} />
      </Container>
    )
    }
    
    export default PloneReleaseView;