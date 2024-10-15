import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  page: number;
  pages: number;
  onPageChange: (page: number) => void;
};

const Pagination = ({ page, pages, onPageChange }: Props) => {
  const maxVisiblePages = 5;

  const getPageNumbers = () => {
    if (pages <= maxVisiblePages) {
      return Array.from({ length: pages }, (_, i) => i + 1);
    }

    const leftOffset = Math.max(
      0,
      Math.min(page - Math.ceil(maxVisiblePages / 2), pages - maxVisiblePages)
    );
    return Array.from(
      { length: maxVisiblePages },
      (_, i) => leftOffset + i + 1
    );
  };

  const pageNumbers = getPageNumbers();

  return (
    <nav
      className="flex justify-center items-center space-x-2"
      aria-label="Pagination"
    >
      <Button
        variant="outline"
        size="icon"
        onClick={() => onPageChange(Math.max(1, page - 1))}
        disabled={page === 1}
        aria-label="Previous page"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      {page > Math.ceil(maxVisiblePages / 2) && (
        <>
          <Button variant="outline" onClick={() => onPageChange(1)}>
            1
          </Button>
          {page > Math.ceil(maxVisiblePages / 2) + 1 && (
            <span className="px-2">...</span>
          )}
        </>
      )}

      {pageNumbers.map((number) => (
        <Button
          key={number}
          variant={page === number ? "default" : "outline"}
          onClick={() => onPageChange(number)}
          aria-current={page === number ? "page" : undefined}
          className={
            page === number ? "bg-teal-600 text-white hover:bg-teal-700" : ""
          }
        >
          {number}
        </Button>
      ))}

      {page < pages - Math.floor(maxVisiblePages / 2) && (
        <>
          {page < pages - Math.floor(maxVisiblePages / 2) - 1 && (
            <span className="px-2">...</span>
          )}
          <Button variant="outline" onClick={() => onPageChange(pages)}>
            {pages}
          </Button>
        </>
      )}

      <Button
        variant="outline"
        size="icon"
        onClick={() => onPageChange(Math.min(pages, page + 1))}
        disabled={page === pages}
        aria-label="Next page"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </nav>
  );
};

export default Pagination;
