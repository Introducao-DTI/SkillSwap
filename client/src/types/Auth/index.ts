// Auth Components Types

export type CaixaDeTextoProps = React.PropsWithChildren<{
  variant?: "primary" | "secondary";
}>;

export type CorpoPrincipalProps = React.PropsWithChildren;

export type FormLayoutProps = React.PropsWithChildren<{
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}>;

export type FormRowProps = React.PropsWithChildren<{
  cols?: 1 | 2 | 3;
}>;

export type HeaderProps = React.PropsWithChildren;

export type TituloHeaderProps = React.PropsWithChildren;

// Auth API Types
export type UsuarioDTO = {
  id: string;
  nome: string;
  role: "Admin" | "Usuario";
};

export type InformacoesDTO = {
  email: string;
  telefone: string;
  rua: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  estado: string;
  cep: string;
};
