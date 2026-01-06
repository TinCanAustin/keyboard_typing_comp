export default function ResultLayout({
    children,
    modal,
    scoreboard
}: Readonly<{
    children: React.ReactNode,
    modal: React.ReactNode,
    scoreboard: React.ReactNode
}>){
    return(
        <>
            <div className="result-body">
                {children}
                <div className="mis-info">
                    <h1>Leaderboard:</h1>
                    {scoreboard}
                </div>
            </div>
            {modal}
        </>
    );
}