import React, { ReactNode } from "react";
import Skeleton from "@mui/material/Skeleton";

interface SkeletonChilProps {
  children: ReactNode;
  loading: boolean;
}

export function SkeletonChild(props: SkeletonChilProps) {
  if (props.loading) {
    return <Skeleton width="100%">{props.children}</Skeleton>;
  }

  return props.children;
}
