import { useContext, useEffect } from "react";
import AppContext from "../../context/AppContext";
import { BrowserView, MobileView } from "react-device-detect";
import { Button, Center, HStack, VStack } from "@chakra-ui/react";
import { BiGridAlt, BiEdit} from "react-icons/bi";
import { RiStackLine } from "react-icons/ri";
import { VscNewFile } from "react-icons/vsc";

const ActionButton = (props) => {
  return (
    <Button
      leftIcon={props.icon}
      onClick={props.onClick}
      backgroundColor={props.backgroundColor}
      border="none"
    >
      {props.children}
    </Button>
  );
};

export default function ActionMenu(props) {
  const value = useContext(AppContext);
  const { visibleView, remount } = value.state;

  const handleClick = (id) => {
    value.setVisibleView(id);
    value.setRemount(remount+1);
    console.log(remount, "remount")
  };

  return (
      <VStack id="action-menu" gap={3}>
        <ActionButton
          onClick={() => handleClick(1)}
          backgroundColor={visibleView == 1 ? "#eeeeee" : "none"}
          icon={<BiGridAlt />}
        >
          Dashboard
        </ActionButton>
        <ActionButton
          onClick={() => handleClick(2)}
          backgroundColor={visibleView == 2 ? "#eeeeee" : "none"}
          icon={<RiStackLine />}
        >
          Proposals
        </ActionButton>
        <ActionButton
          onClick={() => handleClick(3)}
          backgroundColor={visibleView == 3 ? "#eeeeee" : "none"}
          icon={<BiEdit />}
        >
          New Proposal
        </ActionButton>
      </VStack>
  );
}
