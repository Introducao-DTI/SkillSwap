import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type RoleUsuario = "Admin" | "Usuario" | null;

type AuthState = {
  roleUsuario: RoleUsuario;
  emailConvite: string | null;
  nomeUsuario: string | null;
};

const initialState: AuthState = {
  roleUsuario: null,
  emailConvite: null,
  nomeUsuario: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setRoleUsuario(state, action: PayloadAction<RoleUsuario>) {
      state.roleUsuario = action.payload;
    },
    setEmailConvite(state, action: PayloadAction<string | null>) {
      state.emailConvite = action.payload;
    },
    setNomeUsuario(state, action: PayloadAction<string | null>) {
      state.nomeUsuario = action.payload;
    },
    resetAuth: () => initialState,
  },
});

export const { setRoleUsuario, setEmailConvite, setNomeUsuario, resetAuth } =
  authSlice.actions;

export default authSlice.reducer;
