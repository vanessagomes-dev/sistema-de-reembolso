import { useState } from "react";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

export function SignIn() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [isLoading, setIsLoading] = useState(false);

  function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    // Lógica de autenticação aqui
  }
  return (
    <form onSubmit={onSubmit} className="w-full flex flex-col gap-4">
      <Input
        required
        legend="E-mail"
        type="email"
        placeholder="seu@email.com"
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        required
        legend="Senha"
        type="password"
        placeholder="digite sua senha"
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button type="submit" isLoading={isLoading}>Entrar</Button>

    </form>
  );
}
