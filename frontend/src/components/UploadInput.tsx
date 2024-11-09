import { useState, useCallback, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export default function UploadInput() {
  const { toast } = useToast();

  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const isValidFile = (file: File) => {
    return file.name.toLowerCase().endsWith(".pdf");
  };

  const addFiles = useCallback(
    (newFiles: File[]) => {
      const validFiles = newFiles.filter(isValidFile);
      const invalidFiles = newFiles.filter((file) => !isValidFile(file));

      setFiles((prevFiles) => [...prevFiles, ...validFiles]);

      if (invalidFiles.length > 0) {
        toast({
          title: "Arquivo(s) inválido(s)",
          description: "Apenas arquivos .pdf são permitidos.",
          variant: "destructive",
        });
      }
    },
    [isValidFile, toast]
  );

  const handleDragEnter = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();

      const droppedFiles = Array.from(e.dataTransfer.files);
      addFiles(droppedFiles);
    },
    [addFiles]
  );

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        const selectedFiles = Array.from(e.target.files);
        addFiles(selectedFiles);
      }
    },
    [addFiles]
  );

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  useEffect(() => {
    if (files.length > 0) {
      toast({
        title: "Arquivo carregado",
        description: "O arquivo foi carregado com sucesso.",
        variant: "default",
      });
    }
  }, [files, toast]);

  return (
    <Card className="w-[450px] h-[154px] bg-[#EE3138] p-8 rounded-sm">
      <CardContent>
        <div
          onDragEnter={handleDragEnter}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className="flex items-center justify-between gap-4"
        >
          <Button
            variant="secondary"
            className="w-[88px] h-[88px] p-5 rounded-full bg-white  flex-shrink-0"
            onClick={handleButtonClick}
          >
            <img
              src="/assets/icons/file-arrow-up.svg"
              alt="file upload"
              className="w-12 h-12"
            />
          </Button>

          <p className="font-semibold text-2xl text-white">
            Enviar arquivos para a análise de carbono
          </p>

          <Input
            ref={fileInputRef}
            type="file"
            className="sr-only w-0 h-0"
            onChange={handleFileChange}
            accept=".pdf"
          />
        </div>
      </CardContent>
    </Card>
  );
}
