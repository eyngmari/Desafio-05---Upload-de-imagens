import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return(
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="4xl" >
        <ModalOverlay/>
        <ModalContent
          mx="auto"
          h="auto"
          w="auto"
          maxw="900px"
          maxh="600px"
        >
          
          <ModalBody p="0">
            <Image 
            src={imgUrl}
            maxW="900px"
            maxH="600px"
          />
          </ModalBody>
          <ModalFooter bg="pGray.800">
            <Link 
              href={imgUrl}
              color="white"
              isExternal
            >
              Abrir original
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
