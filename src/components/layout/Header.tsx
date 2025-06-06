import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Header() {
  return (
    <header className="bg-white dark:bg-stone-800 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-semibold text-stone-700 dark:text-stone-200">
              Helium
            </span>
          </div>
          <nav className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <Avatar className="h-8 w-8">
                <AvatarImage
                  src="https://i.pravatar.cc/300?u=hardcodeduser"
                  alt="User Avatar"
                />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-stone-700 dark:text-stone-200">
                  Jane Doe
                </span>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
