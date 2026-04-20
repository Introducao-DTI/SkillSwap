import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type RoleUsuario = "Admin" | "Usuario" | null;

type AuthState = {
  idUsuario: string | null;
  roleUsuario: RoleUsuario;
  emailUsuario: string | null;
  telefoneUsuario: string | null;
  emailConvite: string | null;
  nomeUsuario: string | null;
  nomeConvite: string | null;
};

const initialState: AuthState = {
  idUsuario: null,
  roleUsuario: null,
  emailUsuario: null,
  telefoneUsuario: null,
  emailConvite: null,
  nomeUsuario: null,
  nomeConvite: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUsuarioId(state, action: PayloadAction<string | null>) {
      state.idUsuario = action.payload;
    },
    setRoleUsuario(state, action: PayloadAction<RoleUsuario>) {
      state.roleUsuario = action.payload;
    },
    setEmailUsuario(state, action: PayloadAction<string | null>) {
      state.emailUsuario = action.payload;
    },
    setEmailConvite(state, action: PayloadAction<string | null>) {
      state.emailConvite = action.payload;
    },
    setTelefoneUsuario(state, action: PayloadAction<string | null>) {
      state.telefoneUsuario = action.payload;
    },
    setNomeUsuario(state, action: PayloadAction<string | null>) {
      state.nomeUsuario = action.payload;
    },
    setNomeConvite(state, action: PayloadAction<string | null>) {
      state.nomeConvite = action.payload;
    },
    resetAuth: () => initialState,
  },
});

export const {
  setUsuarioId,
  setRoleUsuario,
  setEmailConvite,
  setNomeUsuario,
  setNomeConvite,
  setEmailUsuario,
  setTelefoneUsuario,
  resetAuth,
} = authSlice.actions;

export default authSlice.reducer;
