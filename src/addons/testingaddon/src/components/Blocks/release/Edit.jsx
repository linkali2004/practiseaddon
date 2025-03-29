import { SidebarPortal } from '@plone/volto/components';
import { withBlockExtensions } from '@plone/volto/helpers';
import ReleaseData from './Data';
import View from './View';

const Edit = (props) => {
  const { data, onChangeBlock, block, selected } = props;
  return (
    <>
      <View {...props} />
      <SidebarPortal selected={selected}>
        <ReleaseData
          key={block}
          {...props}
          data={data}
          block={block}
          onChangeBlock={onChangeBlock}
        />
      </SidebarPortal>
    </>
  );
};

export default withBlockExtensions(Edit);