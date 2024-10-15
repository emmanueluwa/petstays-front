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
      <option value="pricePerNightAsc">Pice per night (low to high)</option>
      <option value="pricePerNightDesc">Pice per night (high to low)</option>
    </select>
  );
};

export default SortByFilter;
