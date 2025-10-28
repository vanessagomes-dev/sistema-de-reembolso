import { useState } from "react";
import { CATEGORIES, CATEGORIES_KEYS } from "../utils/categories";
import { Input } from "../components/Input";
import { Upload } from "../components/Upload";
import { Select } from "../components/Select";

export function Refund() {
  const [category, setCategory] = useState<string>("");

  return (
    <form className="bg-gray-500 w-full rounded-xl flex flex-col p-10 gap-6 lg:min-w-lg">
      <header>
        <h1 className="text-xl font-bold text-gray-100">
          Solicitação de reembolso
        </h1>
        <p className="text-sm text-gray-200 mt-2 mb-4">
          Dados da despesa para solicitar reembolso.
        </p>
      </header>

      <Input required legend="Nome da solicitação" />

      <div className="flex gap-4">
      <Select
        required
        legend="Categoria"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {CATEGORIES_KEYS.map((category) => (
          <option key={category} value={category}>
            {CATEGORIES[category].name}
          </option>
        ))}
      </Select>

      <Input legend="Valor" required />
      </div>

      <Upload />
    </form>
  );
}
