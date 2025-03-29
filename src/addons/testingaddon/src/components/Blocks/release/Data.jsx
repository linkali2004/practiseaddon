import { BlockDataForm } from '@plone/volto/components';
import Schema from './schema';

const ReleaseData = (props) => {
  const { data, block, onChangeBlock, blocksConfig } = props;
  const schema = Schema({ ...props });
  return (
    <BlockDataForm
      schema={schema}
      title={schema.title}
      onChangeField={(id, value) => {
        onChangeBlock(block, {
          ...data,
          [id]: value,
        });
      }}
      onChangeBlock={onChangeBlock}
      formData={data}
      block={block}
      blocksConfig={blocksConfig}
    />
  );
};

export default ReleaseData;