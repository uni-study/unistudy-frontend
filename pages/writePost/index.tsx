import { MainContent } from "@/components/layout/mainContent";
import PostingBtn from "@/components/writePost/PostingBtn";
import StepOne from "@/components/writePost/StepOne";
import StepTwo from "@/components/writePost/StepTwo";

export default function WritePost() {
    return (
        <MainContent>
            <StepOne />
            <StepTwo />
            <PostingBtn />
        </MainContent>
    );
}
