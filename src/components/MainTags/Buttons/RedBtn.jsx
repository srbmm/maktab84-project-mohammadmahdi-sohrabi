export const RedBtn = ({children, className=""}) => {
    className = `border border-my-red p-2 bg-my-red hover:bg-white transition ${className}`
    return (
        <button className={className}>
            {children}
        </button>
    );
};

