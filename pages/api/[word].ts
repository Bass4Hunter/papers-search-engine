import type { NextApiRequest, NextApiResponse } from 'next'
import type result from '../../types/result'

type Data = {
    results: Array<result>
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const word = req.query.word
    const { exec } = require('child_process');
    exec(`echo \'${word}\'`, (error, stdout, stderr) => {
        if (error) {
            console.error(`error: ${error.message}`);
            return;
        }

        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
        }
        const result = stdout
        //* procesar aqui y pasar un arreglo type result*//
        const procesado: Array<result> = [{ title: result }]
        /////////////////////////
        res.status(200).json({ results: procesado })
    });
}
