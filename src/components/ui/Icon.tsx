interface IconProps {
  w: number;
  h?: number;
  className: string;
  iconName: string;
}

const Icon = ({ w, h = w, className, iconName }: IconProps) => {
  return (
    <svg className={className} width={w} height={h}>
      <use href={`/icons/sprite.svg#${iconName}`}></use>
    </svg>
  );
};

export default Icon;
