// Auth Page Props Types

export type RoleUsuario = "admin" | "usuario";

export type BemVindoPageProps = {
  nomeUsuario: string;
  roleUsuario: RoleUsuario;
};

export type CompleteDadosPageProps = {
  roleUsuario: RoleUsuario;
};

export type CriarContaPageProps = {
  emailConvite?: string;
};

// Auth Components Types

export type CaixaDeTextoProps = React.PropsWithChildren<{
  variant?: "primary" | "secondary";
}>;

export type CorpoPrincipalProps = React.PropsWithChildren;

export type FormLayoutProps = React.PropsWithChildren<{
  onSubmit?: (e: React.SubmitEvent) => void;
}>;

export type FormRowProps = React.PropsWithChildren<{
  cols?: 1 | 2 | 3;
}>;

export type HeaderProps = React.PropsWithChildren;

export type TituloHeaderProps = React.PropsWithChildren;
