import {
  Select,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableCaption,
  TableContainer,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Avatar,
  useDisclosure,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { SearchIcon } from "@chakra-ui/icons";

import AddProductModal from "../../components/AddProductModal/AddProductModal";
import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/Product/ProductApi";
import DashboardTd from "../../components/DashBoadrTd/DashboardTd";

const Dashboard = () => {
  const dispatch = useDispatch();
  const {
    isOpen: addIsOpen,
    onOpen: addOnOpen,
    onClose: addOnClose,
  } = useDisclosure();

  const { Products, currentPage, totalPages } = useSelector(
    (store) => store.ProductReducer
  );

  const [searchparams, setSearchParams] = useSearchParams();
  let g = searchparams.get("gender");
  const [gender, setGender] = useState(g || "");
  let c = searchparams.get("category");
  const [category, setCategory] = useState(c || "");
  let s = searchparams.get("search");
  const [search, setSearch] = useState(s || "");
  let p = searchparams.get("page");
  const [page, setPage] = useState(p || 1);
  let sor = searchparams.get("sortOrder");
  const [sort, setSort] = useState(sor || "");
  console.log("sortOrder", sor, sort);

  let tot = new Array(totalPages).fill(0);
  useEffect(() => {
    let params = {};

    if (sort.length) params.sortOrder = sort;
    if (category.length) params.category = category;
    if (gender.length) params.gender = gender;
    if (search.length) params.search = search;
    if (page > 0) params.page = page;
    setSearchParams(params);
    dispatch(getProducts(params));
    console.log("triggerd");
  }, [gender, category, search, page, sort]);

  return (
    <>
      <main className="  px-4 sm:px-6 lg:px-8">
        <section aria-labelledby="products-heading" className="pb-24 pt-6">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-6">
            {/* Side bar */}
            <div>
              <h1 className="text-xl font-bold tracking-tight py-5 text-center text-[#013CC6]">
                Nayka Dashboard
              </h1>

              <div className="grid grid-rows-3">
                <Link to={"/dashboard"}>
                  {" "}
                  <div className="flex justify-around m-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#013CC6"
                      className="w-6 h-6">
                      <path
                        fillRule="evenodd"
                        d="M3 6a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3V6ZM3 15.75a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2.25Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3v-2.25Z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <h1>DashBoard</h1>
                  </div>
                </Link>
                <Link to={"/analytics"}>
                  {" "}
                  <div className="flex justify-around m-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#013CC6"
                      className="w-6 h-6">
                      <path
                        fillRule="evenodd"
                        d="M10.5 3A1.501 1.501 0 0 0 9 4.5h6A1.5 1.5 0 0 0 13.5 3h-3Zm-2.693.178A3 3 0 0 1 10.5 1.5h3a3 3 0 0 1 2.694 1.678c.497.042.992.092 1.486.15 1.497.173 2.57 1.46 2.57 2.929V19.5a3 3 0 0 1-3 3H6.75a3 3 0 0 1-3-3V6.257c0-1.47 1.073-2.756 2.57-2.93.493-.057.989-.107 1.487-.15Z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <h1>Analytics</h1>
                  </div>
                </Link>
                <Link to={"/login"}>
                  <div className="flex justify-around m-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#013CC6"
                      className="w-6 h-6 ">
                      <path
                        fillRule="evenodd"
                        d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <h1>Logout</h1>
                  </div>
                </Link>
              </div>
            </div>

            {/* Product grid */}
            <div className="lg:col-span-5">
              <div>
                {/* serch bar Start */}
                <div className="py-5 flex justify-between">
                  {" "}
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <SearchIcon color="gray.300" />
                    </InputLeftElement>
                    <Input
                      type="tel"
                      placeholder="Phone number"
                      width="auto"
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </InputGroup>
                  <div className=" flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 mr-5">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                      />
                    </svg>

                    <Avatar
                      name="Dan Abrahmov"
                      src="https://bit.ly/dan-abramov"
                    />
                  </div>
                </div>
                {/* serch bar end */}

                <div className="grid grid-cols-4 mb-10  gap-4">
                  <Select
                    variant="unstyled"
                    placeholder="Filer By Gender"
                    onChange={(e) => setGender(e.target.value)}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </Select>
                  <Select
                    variant="unstyled"
                    placeholder="Filer By Category"
                    onChange={(e) => setCategory(e.target.value)}>
                    <option value="makeup">Makeup</option>
                    <option value="skincare">Skincare</option>
                    <option value="haircare">Haircare</option>
                  </Select>
                  <Select
                    variant="unstyled"
                    placeholder="Sort By Price"
                    onChange={(e) => setSort(e.target.value)}>
                    <option value="asc">Assending</option>
                    <option value="desc">Dessending</option>
                  </Select>
                  <Button colorScheme="facebook" onClick={addOnOpen}>
                    Add Product
                  </Button>
                </div>
                <TableContainer>
                  <Table variant="simple" size="sm">
                    <TableCaption>
                      <div>
                        <nav
                          className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                          aria-label="Pagination">
                          <button
                            onClick={() => setPage(page - 1)}
                            disabled={currentPage - 1 <= 0}
                            className={`relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0`}>
                            <span className="sr-only">Previous</span>
                            <ChevronLeftIcon
                              className="h-5 w-5"
                              aria-hidden="true"
                            />
                          </button>

                          {tot?.map((e, i) => (
                            <button
                              onClick={() => setPage(i + 1)}
                              key={i}
                              aria-current="page"
                              className={`relative z-10 inline-flex items-center ${
                                currentPage - 1 == i &&
                                "bg-[#013CC6] text-white"
                              } px-4 py-2 text-sm font-semibold text-black focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}>
                              {i + 1}
                            </button>
                          ))}

                          <button
                            onClick={() => setPage(page + 1)}
                            disabled={currentPage + 1 > totalPages}
                            className={`"cursor-not-allowed"
                            }relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0`}>
                            <span className="sr-only">Next</span>
                            <ChevronRightIcon
                              className="h-5 w-5"
                              aria-hidden="true"
                            />
                          </button>
                        </nav>
                      </div>
                    </TableCaption>
                    <Thead>
                      <Tr>
                        <Th>Product</Th>
                        <Th>Gender</Th>
                        <Th>Category</Th>
                        <Th>Price</Th>
                        <Th>Description</Th>
                        <Th>Action</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {Products?.map((item) => (
                        <DashboardTd
                          {...item}
                          key={item.id + item.descripton}
                        />
                      ))}
                    </Tbody>
                  </Table>
                </TableContainer>
              </div>
            </div>
          </div>
        </section>
      </main>

      <AddProductModal
        addIsOpen={addIsOpen}
        addOnOpen={addOnOpen}
        addOnClose={addOnClose}
      />
    </>
  );
};

export default Dashboard;
