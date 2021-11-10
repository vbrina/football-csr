import React from 'react';
import { Table } from 'antd';
import { isPlayerInjured } from '../../helpers/isPlayerInjured';
import { playerPosition } from '../../helpers/playerPosition';

import './PlayerTable.css';
import { scrollToTop } from '../../helpers/scrollToTop';

export interface IPlayer {
  player_name: string;
  player_age: string;
  player_image: string;
  player_goals: string;
  player_number: string;
  player_type: string;
  player_injured: string;
}

export interface PlayerTableProps {
  players: IPlayer[] | undefined;
}

export const PlayerTable: React.FC<PlayerTableProps> = ({ players }) => {
  const columns = [
    {
      title: 'Jogador',
      dataIndex: 'picture',
      key: 'picture',
      width: 300,
      render: (src: string) => <img src={src} alt="Not found" />
    },
    {
      title: 'Nome',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Número',
      dataIndex: 'number',
      key: 'number'
    },
    {
      title: 'Idade',
      dataIndex: 'age',
      key: 'age'
    },
    {
      title: 'Posição',
      dataIndex: 'position',
      key: 'position'
    },
    {
      title: 'Gols',
      dataIndex: 'goals',
      key: 'goals'
    },
    {
      title: 'Machucado',
      dataIndex: 'injured',
      key: 'injured'
    }
  ];

  const data = players?.map((player, index) => {
    return {
      key: index,
      picture: player.player_image,
      name: player.player_name,
      number: player.player_number,
      age: player.player_age,
      position: playerPosition(player.player_type),
      goals: player.player_goals,
      injured: isPlayerInjured(player.player_injured)
    };
  });

  return (
    <Table
      columns={columns}
      dataSource={data}
      onChange={() => scrollToTop('team-info-root')}
    />
  );
};
