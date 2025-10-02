import { createContext, ReactNode, useContext, useState } from "react";

type ImageContext = {
  images: string[];
  setImages: (v: string[]) => void;
};

const MyContext = createContext<ImageContext | undefined>(undefined);

export function MyProvider({ children }: { children: ReactNode }) {
  const [images, setImages] = useState<string[]>([]);
  return (
    <MyContext.Provider value={{ images, setImages }}>
      {children}
    </MyContext.Provider>
  );
}

export function useImageContext() {
  const context = useContext(MyContext);
  if (!context) throw new Error("useImageContext must be inside MyProvider");
  return context;
}
