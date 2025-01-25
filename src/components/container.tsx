interface ContainerProps {
  children: React.ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
  return (
    <div className="max-w-[1100px] mx-auto min-h-screen flex flex-col mb-10">
      {children}
    </div>
  );
};
