import { MainContent } from "@/components/layout/mainContent";
import PostingBtn from "@/components/writePost/PostingBtn";
import StepTwo from "@/components/writePost/StepTwo";

export default function Content() {
    return (
        <>
            <MainContent>
                <StepTwo />
                <PostingBtn />
            </MainContent>
        </>
    );
}
