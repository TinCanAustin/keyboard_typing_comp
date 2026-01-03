export default function ResultLayout({
    children,
    modal
}: Readonly<{
    children: React.ReactNode,
    modal: React.ReactNode
}>){
    return(
        <>
            {children}
            {modal}
        </>
    );
}