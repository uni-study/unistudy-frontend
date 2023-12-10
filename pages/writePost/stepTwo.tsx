import dynamic from "next/dynamic";

const MainContent = dynamic(import("@/components/layout/mainContent"));
const PostingBtn = dynamic(import("@/components/writePost/PostingBtn"));
const StepTwo = dynamic(import("@/components/writePost/StepTwo"));

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
