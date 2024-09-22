import { Block } from '@/app/course-create/_components/block/Block';
import { TAllTypesField } from '@/app/course-create/_components/choose-block/config';

import { FileField } from '@/components/new-ui/file/File';
import { Button, ButtonTheme } from '@/components/new-ui-kit';

export const ImageBlock = ({
  setValue,
  value,
  isEditing,
  type,
}: {
  setValue?: any;
  value: File;
  isEditing: boolean;
  type: TAllTypesField;
}) => {
  return (
    <>
      {isEditing ? (
        <FileField
          onDelete={() => setValue(null)}
          onChange={(file) => setValue(file)}
        />
      ) : (
        <Block>
          <FileField
            value={value}
            onDelete={() => setValue(null)}
            onChange={(file) => setValue(file)}
          />
          <Button theme={ButtonTheme.BLUE_OUTLINE}>Удалить</Button>
        </Block>
      )}
    </>
  );
};
