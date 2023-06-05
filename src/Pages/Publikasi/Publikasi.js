import { Pagetitle } from "../../Components/Pagetitle";
import { Pagination } from "../../Components/Pagination";
import { Searchbar } from "../../Components/Searchbar";
import { Table } from "../../Components/Table";

export const Publikasi = () => {
  return (
    <div className="mx-16 md:mx-48 mt-12 mb-24">
      <Pagetitle text="Publikasi" />
      <Searchbar placeholder="Cari Publikasi" />
      <Table />
      <Pagination />
    </div>
  );
};
