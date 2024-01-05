import {
  Select,
  Button,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { getProducts, patchProduct } from "../../redux/Product/ProductApi";
const EditProductModal = ({
  editIsOpen,
  editOnClose,
  category,
  description,
  gender,
  name,
  picture,
  price,
  _id,
}) => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    category,
    description,
    gender,
    name,
    picture,
    price,
    _id,
  });

  const handelUpdate = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handelUpdateSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    await dispatch(patchProduct(_id, data));
    await dispatch(getProducts());
    editOnClose();
  };
  return (
    <>
      {/* Edit modal Start */}
      <Modal
        closeOnOverlayClick={false}
        initialFocusRef={true}
        isOpen={editIsOpen}
        onClose={editOnClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel> Edit Product Name</FormLabel>
              <Input
                placeholder="name"
                name="name"
                value={data.name}
                onChange={handelUpdate}
              />
            </FormControl>
            {/* image input Start */}
            <FormControl mt={4}>
              <FormLabel> Edit Product Image</FormLabel>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <PhotoIcon
                    className="mx-auto h-12 w-12 text-gray-300"
                    aria-hidden="true"
                  />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </FormControl>

            {/* image input End */}

            <FormControl mt={4}>
              <FormLabel> Edit Product Description</FormLabel>
              <Input
                name="description"
                placeholder="Last name"
                value={data.description}
                onChange={handelUpdate}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Edit Gender</FormLabel>
              <Select
                variant="unstyled"
                name="gender"
                value={data.gender}
                onChange={handelUpdate}
                placeholder="Select Gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Select>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel> Edit Category </FormLabel>
              <Select
                variant="unstyled"
                name="category"
                value={data.category}
                onChange={handelUpdate}
                placeholder="Select Category">
                <option value="makeup">Makeup</option>
                <option value="skincare"> Skincare </option>
                <option value="haircare"> Haircare</option>
              </Select>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Price</FormLabel>
              <Input
                placeholder="Price"
                name="price"
                type="number"
                onChange={handelUpdate}
                value={data.price}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handelUpdateSubmit}>
              Save
            </Button>
            <Button onClick={editOnClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/* Edit Modal End */}
    </>
  );
};

export default EditProductModal;
