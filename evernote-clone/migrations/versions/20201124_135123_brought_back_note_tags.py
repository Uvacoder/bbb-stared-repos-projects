"""brought back note_tags!

Revision ID: ca0e80f37f3e
Revises: b25eebcbcf36
Create Date: 2020-11-24 13:51:23.006579

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'ca0e80f37f3e'
down_revision = 'b25eebcbcf36'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('note_tags',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('tag_id', sa.Integer(), nullable=False),
    sa.Column('note_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['note_id'], ['notes.id'], ),
    sa.ForeignKeyConstraint(['tag_id'], ['tags.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index('only_one_unique_tag_per_note', 'note_tags', ['tag_id', 'note_id'], unique=True)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index('only_one_unique_tag_per_note', table_name='note_tags')
    op.drop_table('note_tags')
    # ### end Alembic commands ###