import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
import type React from "react";

export const RootNavigationContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const navigationContainerRef = useNavigationContainerRef();

  return (
    <NavigationContainer ref={navigationContainerRef}>
      {children}
    </NavigationContainer>
  );
};
