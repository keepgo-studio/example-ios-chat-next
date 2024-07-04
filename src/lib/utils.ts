export const delay = (n: number) => new Promise((res) => setTimeout(() => res(true), n));

export function blobToBase64(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
          const dataUrl: string = reader.result as string;
          const base64: string = dataUrl.split(',')[1];
          resolve(base64);
      };
      reader.onerror = (error: ProgressEvent<FileReader>) => {
          reject(error);
      };
      reader.readAsDataURL(blob);
  });
}

export function base64ToBlob(base64: string, mimeType: string): Blob {
  const binary = atob(base64);
  const length = binary.length;
  const bytes = new Uint8Array(length);

  for (let i = 0; i < length; i++) {
      bytes[i] = binary.charCodeAt(i);
  }

  return new Blob([bytes.buffer], { type: mimeType });
}
