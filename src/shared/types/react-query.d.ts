import '@tanstack/react-query';

type MutationMeta = {
  shouldShowToastMessage?: boolean;
  errorMessage?: string;
};

declare module '@tanstack/react-query' {
  interface Register {
    mutationMeta: MutationMeta;
  }
}
