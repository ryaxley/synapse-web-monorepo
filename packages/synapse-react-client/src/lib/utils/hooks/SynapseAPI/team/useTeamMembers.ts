import { useQuery, UseQueryOptions } from 'react-query'
import { SynapseClient } from '../../..'
import { SynapseClientError } from '../../../SynapseClientError'
import { useSynapseContext } from '../../../SynapseContext'
import { PaginatedResults } from '../../../synapseTypes'
import { TeamMember } from '../../../synapseTypes/TeamMember'
import { KeyFactory } from '../KeyFactory'

export function useGetTeamMembers(
  teamId: string | number,
  options?: UseQueryOptions<PaginatedResults<TeamMember>, SynapseClientError>,
) {
  const { accessToken } = useSynapseContext()
  const keyFactory = new KeyFactory(accessToken)
  return useQuery<PaginatedResults<TeamMember>, SynapseClientError>(
    keyFactory.getTeamMembersQueryKey(String(teamId)),
    () => SynapseClient.getTeamMembers(accessToken, teamId, '', 50, 0),
    options,
  )
}

export function useGetIsUserMemberOfTeam(
  teamId: string,
  userId: string,
  options?: UseQueryOptions<TeamMember | null, SynapseClientError>,
) {
  const { accessToken } = useSynapseContext()
  const keyFactory = new KeyFactory(accessToken)

  return useQuery<TeamMember | null, SynapseClientError>(
    keyFactory.getIsUserMemberOfTeamQueryKey(teamId, userId),
    () => SynapseClient.getIsUserMemberOfTeam(teamId, userId, accessToken),
    options,
  )
}
