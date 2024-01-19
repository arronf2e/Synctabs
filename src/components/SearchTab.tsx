import { MagnifyingGlassIcon } from "@radix-ui/react-icons"
import { TextField } from "@radix-ui/themes"

interface SearchTabProps {
  search: string
  setSearch: (search: string) => void
}

export default function SearchTab({search, setSearch}: SearchTabProps) {
  return (
    <TextField.Root>
      <TextField.Slot>
        <MagnifyingGlassIcon height="16" width="16" />
      </TextField.Slot>
      <TextField.Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search the tabs..." />
    </TextField.Root>
  )
}
