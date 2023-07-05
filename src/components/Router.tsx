interface RouterProps {
  children: React.ComponentType;
}

const Router: React.FC<RouterProps> = ({ children }) => {
  return <>{children}</>;
};

export default Router;
