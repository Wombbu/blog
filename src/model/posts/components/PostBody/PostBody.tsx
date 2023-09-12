import markdownStyles from "./PostBody.module.css";

type Props = {
  content: string;
};

const PostBody = ({ content }: Props) => {
  return (
    <section
      className={`${markdownStyles["markdown"]} mt-4`}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default PostBody;
