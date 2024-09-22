// components/TreeNode.js
import Link from 'next/link';
import React from 'react';

import styles from './styles.module.scss';

const TreeNode = ({ node, level = 0 }) => {
  return (
    <div className={styles.flex} style={{ marginLeft: `${level * 40}px` }}>
      {' '}
      {/* Отступ увеличивается с каждым уровнем */}
      <div>
        <div className={styles.course}>
          {level === 0 ? (
            <p>{node.course || node.title}</p>
          ) : (
            <>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='13'
                viewBox='0 0 20 13'
                fill='none'
              >
                <path
                  d='M14 11.0947L17.1893 7.90533H7C3.27208 7.90533 0.25 4.88333 0.25 1.15533V0.905332C0.25 0.491132 0.58579 0.155332 1 0.155332C1.41422 0.155332 1.75 0.491132 1.75 0.905332V1.15533C1.75 4.05483 4.1005 6.40533 7 6.40533H17.1893L14 3.21603C13.7071 2.92313 13.7071 2.44823 14 2.15533C14.2929 1.86243 14.7677 1.86243 15.0606 2.15533L19.5303 6.62503C19.8232 6.91793 19.8232 7.39283 19.5303 7.68563L15.0606 12.1553C14.7677 12.4482 14.2929 12.4482 14 12.1553C13.7071 11.8624 13.7071 11.3876 14 11.0947Z'
                  fill='black'
                />
              </svg>
              <Link href={`/categories/6/courses/${node.slug}`}>
                {node.course || node.title}
              </Link>
            </>
          )}
        </div>{' '}
        {/* Выводим название курса или узла */}
      </div>
      {node.children && node.children.length > 0 && (
        <div className={styles.flex}>
          {node.children.map((child) => (
            <TreeNode key={child.id} node={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TreeNode;
