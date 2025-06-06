export function Footer() {
  return (
    <footer className="bg-white dark:bg-stone-800 border-t border-stone-200 dark:border-stone-700 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center text-sm text-stone-500 dark:text-stone-400">
        <p>
          &copy; {new Date().getFullYear()} Helium Contractor Assignment solved
          by bautigaraventa
        </p>
        <div className="mt-1">
          <a
            href="https://github.com/bautigaraventa/localization-management-frontend"
            target="_blank"
            className="hover:underline mx-2"
          >
            Check project repo here!
          </a>
        </div>
      </div>
    </footer>
  );
}
