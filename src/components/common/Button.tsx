interface ButtonProps {
    style?: 'primary' | 'secondary' | 'nofillPrimary' | 'nofillSecondary' | 'tertiary' | 'nofillTertiary';
    rightIcon?: React.ReactNode;
    leftIcon?: React.ReactNode;
    onClick?: () => void;
    children?: React.ReactNode;
    width?: string | number;
  }
  
  function Button({ style, rightIcon, leftIcon, onClick, children, width ,}: ButtonProps) {
    const getButtonStyle = () => {
      switch (style) {
        case 'primary':
          return 'h-[4.5rem]   bg-callAcction text-textW';
        case 'secondary':
          return 'h-[3.75rem]  bg-callAcction text-textW';
        case 'tertiary':
          return 'h-[2.875rem]  bg-callAcction text-textW';
        case 'nofillPrimary':
          return 'h-[4.5rem] border-2 border-solid border-callAcction text-textW';
        case 'nofillSecondary':
          return 'h-[3.75rem] border-2 border-solid border-callAcction text-textW';
        case 'nofillTertiary':
          return 'h-[2.875rem] border-2 border-solid border-callAcction text-textW';
        default:
          return '';
      }
    };
  
    const buttonStyle = {
      width: width || 'auto'
    };
  
    return (
      <button className={`cursor-pointer inline-flex justify-center py-0 px-[3.125rem] items-center gap-3 flex-shrink-0 rounded-[1.25rem]  ${getButtonStyle()}`} style={buttonStyle} onClick={onClick}>
        {leftIcon && <span className="mr-2">{leftIcon}</span>}
        <span className="flex justify-center items-center gap-3">{children}</span>
        {rightIcon && <span className="ml-2">{rightIcon}</span>}
      </button>
    );
  }
  
  export default Button;
  