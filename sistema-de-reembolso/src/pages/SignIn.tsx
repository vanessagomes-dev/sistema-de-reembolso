import { Input } from "../components/Input";

export function SignIn() {
  return (
    <form className="w-full flex flex-col gap-4">
      <Input
        required
        legend="E-mail"
        type="email"
        placeholder="seu@email.com"
      />

      <Input
        required
        legend="Senha"
        type="password"
        placeholder="digite sua senha"
      />

    </form>
  );
}
