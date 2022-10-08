import Link from "next/link";

// This component was created for this issue:
// https://github.com/i18next/react-i18next/issues/1090
const LinkText = (props: any) => {
  return (
    <Link {...props} href={props.href || ""}>
      <a className={props.className}>{props.children}</a>
    </Link>
  );
};

export default LinkText;
