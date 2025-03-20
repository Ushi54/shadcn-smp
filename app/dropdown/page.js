import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Button } from "@/components/ui/button"

export default function DropDown() {
  return (
      <DropdownMenu>
          <Button><DropdownMenuTrigger>Menu</DropdownMenuTrigger></Button>
          <DropdownMenuContent>
            <DropdownMenuLabel>Labels</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Item1</DropdownMenuItem>
            <DropdownMenuItem>Item2</DropdownMenuItem>
            <DropdownMenuItem>Item3</DropdownMenuItem>
            <DropdownMenuItem>Item4</DropdownMenuItem>
          </DropdownMenuContent>
      </DropdownMenu>
  );
}