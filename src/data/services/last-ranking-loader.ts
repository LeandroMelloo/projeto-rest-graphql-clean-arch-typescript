import { RankingScore } from '../../domain/entities'
import { LastRankingLoader } from '../../domain/usecases'

export class LastRankingLoaderService implements LastRankingLoader {
    constructor(private readonly loadLastRankingRepository: LoadLastRankingRepository) {

    }

    async load(): Promise<RankingScore[]> {
        
    }
}