type Props = {
  sortOption?: string;
  onChange: (value?: string) => void;
};

const SortByFilter = ({ onChange, sortOption }: Props) => {
  return (
    <select
      value={sortOption}
      onChange={(event) =>
        onChange(event.target.value ? event.target.value : undefined)
      }
      className="p-2 border rounded-md"
    >
      <option value="">Sort By</option>
      <option value="pricePerMonthAsc">Pice per month (low to high)</option>
      <option value="pricePerMonthDesc">Pice per month (high to low)</option>
    </select>
  );
};

export default SortByFilter;
