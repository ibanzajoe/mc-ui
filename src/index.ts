// Main entry point for mc-ui library
// Legacy Storybook components
export { Button as StoryButton } from './stories/Button';
export type { ButtonProps as StoryButtonProps } from './stories/Button';
export { Header } from './stories/Header';
export type { HeaderProps } from './stories/Header';

// shadcn/ui components
export { Badge } from './components/ui/badge';
export type { BadgeProps } from './components/ui/badge';

export { Avatar, AvatarImage, AvatarFallback } from './components/ui/avatar';

export { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogOverlay,
  DialogClose
} from './components/ui/dialog';

export { Calendar } from './components/ui/calendar';

export { DatePicker } from './components/ui/date-picker';
export type { DatePickerProps } from './components/ui/date-picker';

export { Button } from './components/ui/button';
export type { ButtonProps } from './components/ui/button';

export { 
  Accordion, 
  AccordionItem, 
  AccordionTrigger, 
  AccordionContent 
} from './components/ui/accordion';

export { Input } from './components/ui/input';

export { 
  Sheet, 
  SheetContent, 
  SheetDescription, 
  SheetFooter, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger,
  SheetClose,
  SheetOverlay
} from './components/ui/sheet';

export { Skeleton } from './components/ui/skeleton';

export { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue,
  SelectGroup,
  SelectLabel,
  SelectSeparator
} from './components/ui/select';

export { ScrollArea, ScrollBar } from './components/ui/scroll-area';

export { Combobox } from './components/ui/combobox';
export type { ComboboxProps, ComboboxOption } from './components/ui/combobox';

export { Popover, PopoverContent, PopoverTrigger } from './components/ui/popover';

export { 
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator
} from './components/ui/command';

// Utility functions
export { cn } from './lib/utils';

// Import global styles
import './globals.css';