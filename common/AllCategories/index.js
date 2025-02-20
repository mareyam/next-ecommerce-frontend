import {
  Box,
  useBreakpointValue,
  VStack,
  HStack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { CATEGORIES } from "data/categories";

const index = () => {
  const [selectCategory, setSelectCategory] = useState("");
  const [selectSubCategory, setSelectSubCategory] = useState("");
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  const handleSelectCategory = (category) => {
    setSelectCategory(category);
  };

  const handleSelectSubCategory = (subCategory) => {
    setSelectSubCategory(subCategory);
  };

  return (
    <>
      {isDesktop ? (
        <VStack align="left">
          {CATEGORIES.map((category, index) => (
            <Box
              mr="2"
              key={index}
              py="1"
              borderRadius="4"
              px="2"
              cursor="pointer"
              transition="all 0.25s ease"
              bg={selectCategory == index ? "#E5F1FF" : "white"}
              fontWeight={selectCategory == index ? "700" : "400"}
              onMouseEnter={() => handleSelectCategory(index)}
              onMouseLeave={() => setSelectCategory(null)}
              display="flex"
            >
              <Text w="full">{category.name}</Text>

              {selectCategory === index && (
                <Box top="5" pos="absolute" left="48" bg="white" h="96">
                  {category.subcategories.map((subcategory, index) => (
                    <Box
                      key={index}
                      transition="all 0.25s ease"
                      py="2"
                      borderRadius="4"
                      px="5"
                      cursor="pointer"
                      bg={selectSubCategory == index ? "#E5F1FF" : "white"}
                      onMouseEnter={() => handleSelectSubCategory(index)}
                      onMouseLeave={() => setSelectSubCategory(null)}
                      display="flex"
                      fontWeight={selectSubCategory == index ? "700" : "400"}
                    >
                      <Text>{subcategory}</Text>
                    </Box>
                  ))}
                </Box>
              )}
            </Box>
          ))}
        </VStack>
      ) : (
        <HStack overflow="scroll" overflowY="none">
          {CATEGORIES.map((category, index) => (
            <Box
              w="auto"
              h="8"
              bg={selectCategory == index ? "#E5F1FF" : "gray.200"}
              color="black"
              px="4"
              mb="2"
              borderRadius="6"
              onMouseEnter={() => handleSelectCategory(index)}
              onMouseLeave={() => setSelectCategory(null)}
            >
              <Text w="100%">{category.name}</Text>
            </Box>
          ))}
        </HStack>
      )}
    </>
  );
};

export default index;

// {CATEGORIES.map((category, index) => (
//     <>
//       {isDesktop ? (
//         <>
//           <Box
//             key={index}
//             py="1"
//             borderRadius="4"
//             px="2"
//             cursor="pointer"
//             bg={selectCategory == index ? "#E5F1FF" : "white"}
//             onMouseEnter={() => handleSelectCategory(index)}
//             onMouseLeave={() => setSelectCategory(null)}
//             display="flex"
//           >
//             <Text>{category.name}</Text>
//             {selectCategory === index && (
//               <Box
//                 top="9"
//                 pos="absolute"
//                 left="44"
//                 bg="white"
//                 h="96"
//                 border="1px solid"
//               >
//                 {category.subcategories.map((subcategory, index) => (
//                   <Box
//                     key={index}
//                     py="2"
//                     borderRadius="4"
//                     px="5"
//                     cursor="pointer"
//                     bg={selectSubCategory == index ? "#E5F1FF" : "white"}
//                     onMouseEnter={() => handleSelectSubCategory(index)}
//                     onMouseLeave={() => setSelectSubCategory(null)}
//                     display="flex"
//                   >
//                     <Text>{subcategory}</Text>
//                   </Box>
//                 ))}
//               </Box>
//             )}
//           </Box>
//         </>
//       ) : (
//         <>
//           <HStack border="1px solid" h="20">
//             <Text>{category.name}</Text>
//           </HStack>
//         </>
//       )}
//     </>
//   ))}
